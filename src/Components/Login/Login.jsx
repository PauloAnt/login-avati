import React, { useState } from "react";

import "./Login.css";
import "../../index.css"; 

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
 
export default function Login() {
    
    const schema = yup.object({
        email: yup.string().required("Campo obrigatório").email("O email deve ser válido"),
        password: yup.string().required("Campo obrigatório").min(6, "Mínimo de 6 caracteres")
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const save = (date) => {
        alert("Logado com sucesso!")
    }

    return (
        <div className="tela-login"> {/* Container principal da tela de login */}
            
            <div className="login-box"> {/* Caixa do formulário de login */}
                <div className="login-text"> {/* Título do formulário */}
                    <h1>Fazer login</h1>
                </div>

                <div className="login-form"> {/* Container do formulário */}
                    <form onSubmit={handleSubmit(save)}>
                        
                        {/* Campos de entrada para o email e senha */}
                        <div className="login-form-input">
                            <input 
                                type="text" 
                                placeholder="Email" 
                                className="form-input" 
                                {...register("email")}
                            />
                            {errors.email && <span className="error-message">{errors.email.message}</span>}
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                className="form-input" 
                                {...register("password")}
                            />
                            {errors.password && <span className="error-message">{errors.password.message}</span>}
                        </div>

                        {/* Checkbox para lembrar do usuário e link para recuperação de senha */}
                        <div className="login-form-remember">
                            <label>
                                <input type="checkbox" /> Lembrar de mim
                            </label>
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        {/* Botão de login e link para inscrição */}
                        <div className="login-form-button">
                            <button type="submit" className="form-button">Entrar</button>
                            <p>Não tem uma conta? <a href="#">Inscrever-se</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
