import React from 'react';
import { VideoCardContainer } from './styles';
import {useLocation } from "react-router-dom";


function Welcome({ videoTitle,videoCapa, videoURL, categoryColor }) {
    const username = localStorage.getItem('@welcome-app/username');
    if (username !== null) {
      return (
        <div style={styles.container}>
          <p>Bem vindo {username}</p>
          <button onClick={this.handleLogout} style={styles.submitButton}>Sair</button>
        </div>
      );
    }
    return (
      <form style={styles.container} onSubmit={this.handleSubmit}>
        <input style={styles.username} type="text" name="username" placeholder="Nome de usuário" required />
        <button type="submit" style={styles.submitButton}>Entrar</button>
      </form>
    );
}

export default Welcome;
