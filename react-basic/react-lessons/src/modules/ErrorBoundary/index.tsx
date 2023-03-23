import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useEffect, useState, useRef } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

function ErrorBoundary(props: Props) {
  const [state, setState] = useState<State>({ hasError: false });

  function componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Aqui você pode fazer o que quiser com o erro e o erroInfo, como registrar ou notificar o usuário
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    setState({ hasError: true });
  }

  if (state.hasError) {
    // Aqui você pode renderizar uma mensagem de erro personalizada
    return <h1>Algo deu errado.</h1>;
  }

  // Renderize os filhos normalmente se não houver erros
  return <>{props.children}</>;
}

export default ErrorBoundary;
