export const handleErrors = (error: Error) => {
	console.log("handleErrors");
	console.log(error);
	return {
		error: error.message === "fetch failed" ? "Ocurrio un error, vuelva a intentarlo mas tarde." : error.message,
	};
};
