const alterarDadosRepository = (axios) => async () => {
  try {
    const response = await axios.get('/rest/TODO')
    return response //TODO
  } catch (error) {
    throw error
  }
}

export default alterarDadosRepository
