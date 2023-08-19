
// Global function to add multiple callback parameters :
export const addMultipleCallbackParameters = (event, parameters) => {
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        const value = parameters[key];
        event.addCallbackParameter(key, value);
      }
    }
  };


