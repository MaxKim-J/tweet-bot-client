const precedentTypeFilter = (type:string) => {
  switch (type) {
    case 'civil':
      return { typeName: '민사', typeColor: 'orange' }
    case 'criminal':
      return { typeName: '형사', typeColor: 'skyblue' }
    case 'domestic':
      return { typeName: '가정', typeColor: 'pink' }
    case 'administration':
      return { typeName: '행정', typeColor: 'lightgreen' }
    default:
      return { typeName: '', typeColor: '' }
  }
}

export default precedentTypeFilter
