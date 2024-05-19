function createUserProfiles(names, modifiedNames) {
  let id = 1;
  return names
    .map((originalName, index) => {
      return {
        originalName: originalName,
        modifiedName: modifiedNames[index],
        id: id++,
      };
    });
}

const sampleNames = ['Kuukua', 'Sika', 'Jane', 'Smith'];
const sampleModifiedNames = ['KUUKUA', 'sIKA', 'JANE', 'smith'];
const resultProfiles = createUserProfiles(sampleNames, sampleModifiedNames);
console.log(resultProfiles);