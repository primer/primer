const Metalsmith = require('metalsmith')
const filter = require('metalsmith-filter')
const frontmatter = require('metalsmith-matters')
const watch = require('metalsmith-watch')

const addPackageMeta = require('./add-package-meta')
const {extractPackages, writePackagesJSON} = require('./extract-packages-json')
const addSource = require('./add-source')
const filterBy = require('./filter-by')
const parseDocComments = require('./parse-doc-comments')
const rename = require('./rename')
const writeMeta = require('./write-meta')
const gitIgnore = require('./ignore')

module.exports = function sync(options = {}) {
  // eslint-disable-next-line no-console
  const {log = console.warn} = options

  const metaOptions = options.meta || {namespace: 'data', log}
  const ns = metaOptions.namespace

  // this is what we'll resolve our Promise with later
  let files

  const metal = Metalsmith(process.cwd())
    .source('../modules')
    .destination('pages/css')
    .clean(false)
    .frontmatter(false)
    // ignore anything containing "node_modules" in its path
    .ignore(path => path.includes('node_modules'))
    // only match files that look like docs
    .use(filter(['*/README.md', '*/docs/*.md', '*/package.json']))
    .use(extractPackages())
    // convert <!-- %docs -->...<!-- %enddocs --> blocks into frontmatter
    .use(parseDocComments({log}))
    // parse frontmatter into "data" key of each file
    .use(frontmatter(metaOptions))
    // only match files that have a "path" key in their frontmatter
    .use(filterBy(file => file[ns].path))
    .use(writePackagesJSON({path: 'packages.json'}))
    // write the source frontmatter key to the relative source path
    .use(
      addSource({
        branch: 'master',
        repo: 'primer/primer',
        log
      })
    )
    // copy a subset of fields from the nearest package.json
    .use(
      addPackageMeta({
        fields: ['name', 'description', 'version'],
        namespace: ns
      })
    )
    // rename files with their "path" frontmatter key
    .use(rename(file => file[ns] ? `${file[ns].path}.md` : true), {log})
    .use((_files, metal, done) => {
      files = _files
      done()
    })
    // write frontmatter back out to the file
    .use(writeMeta(metaOptions))
    // keep .gitignore up-to-date with the list of generated files
    .use(
      gitIgnore({
        header: '# DO NOT EDIT: automatically generated by ignore.js'
      })
    )

  if (options.watch) {
    metal.use(watch(typeof options.watch === 'object' ? options.watch : {}))
  }

  return new Promise((resolve, reject) => {
    metal.build(error => {
      error ? reject(error) : resolve(files)
    })
  })
}
