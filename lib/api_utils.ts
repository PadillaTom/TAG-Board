export const handleErrors = (error: Error) => {
	return {
		error: error.message === "fetch failed" ? "Ocurrio un error, vuelva a intentarlo mas tarde." : error.message,
	};
};
