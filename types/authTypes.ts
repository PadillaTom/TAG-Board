export interface LoginRequest {
	username: string;
	password: string;
}

export interface RegisterRequest {
	username: string;
	password: string;
	roleId: number;
}

export interface AuthenticationResponse {
	jwt: string;
}

export interface ExceptionResponse {
	message: string;
	httpStatus: number;
	timestamp: string;
}
