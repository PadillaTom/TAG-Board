
export const handleErrors = (error, message: string) => {
	if (error.code === "ECONNREFUSED") {
		console.log("Backend server is unreachable. Check your backend service.");
		return {
			error: "No se puede establecer conexion con el servidor. Vuelva a intentar mas tarde.",
		};
	}
	return {
		error: message,
	};
};
