const paginated = (page = 1, limit = 5, list = []) => {

  
  let paginateObj = {
    page,
    limit,
    list,
  }
  return paginateObj
}
