const ServiceResponse = (res,data, status, message = 'success', error = null ) =>{
    
  const resultPrint = {}
    resultPrint.message = message
    resultPrint.status = status
    resultPrint.data = data
    resultPrint.error = error
    return res.status(status).json(resultPrint)
  }
  
  module.exports = ServiceResponse;