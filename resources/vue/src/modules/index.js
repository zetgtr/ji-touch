
const modulesImport = [];
const moduleFiles = import.meta.globEager('../modules/**/*.js');
for (const path in moduleFiles) {
    if (path.includes('store')) {
        modulesImport.push(moduleFiles[path].default || moduleFiles[path]);
    }
}
export default Object.assign({}, ...modulesImport);
