# 🖥️ Calculadora de Terminal Interativa (Node.js)

Este projeto consiste em uma ferramenta de linha de comando (CLI) desenvolvida em JavaScript puro, projetada para ser executada diretamente no terminal (PowerShell, CMD ou Bash) utilizando o motor do **Node.js**.

## 🛠️ Tecnologias e Conceitos de Backend

* **Node.js Runtime**: Execução de JavaScript fora do navegador.
* **Módulo Readline**: Utilização da biblioteca nativa do Node para captura e tratamento de fluxos de entrada (`stdin`) e saída (`stdout`).
* **Programação Assíncrona (`async/await`)**: Implementação de promessas para gerenciar a espera por entradas do usuário sem bloquear a execução do sistema.
* **Recursividade Controlada**: Fluxo contínuo de operações que permite reiniciar a aplicação sem encerrar o processo.

---

## 📋 Funcionalidades

A calculadora oferece um menu interativo com as seguintes operações:
1.  **Soma (+)**
2.  **Subtração (-)**
3.  **Multiplicação (*)**
4.  **Divisão Real (/)**
5.  **Divisão Inteira (%)**: Retorna o resto da divisão.
6.  **Potenciação (**)**: Cálculos exponenciais.

---

## 🚀 Passo a Passo para Execução

Como este código foi projetado para rodar via terminal, siga as etapas abaixo para configurar e executar:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** instalado em sua máquina. Para verificar, abra seu terminal e digite:
```bash
node -v
```

### 2. Organização de Pastas
O arquivo principal está localizado dentro da pasta. No seu terminal, navegue até o diretório do projeto:
```powershell
cd "D:\Esmeraldo Junior\projetos-dio\Cod GitHub\Calculadora_Terminal_JS"
```

### 3. Execução
Para iniciar a calculadora, utilize o comando `node` seguido do nome do arquivo (não esqueça a extensão `.js`):
```powershell
node calculadora_terminal.js
```

---

## 🛠️ Configurações de Ambiente e Soluções (FAQ)

Durante o desenvolvimento desta ferramenta de terminal, foram aplicadas configurações específicas para garantir a compatibilidade entre o código e o ambiente de execução:

### 1. Erro: `process is not defined`
Ao desenvolver para Node.js em editores como o VS Code, o motor de linting (ESLint) pode sinalizar que o objeto `process` não está definido. Isso ocorre porque o editor, por padrão, assume um ambiente de **Navegador (Browser)**.
* **Solução**: Foi adicionada a diretiva `/* eslint-env node */` no topo do arquivo. Isso informa ao editor que o código utiliza globais do Node.js (como `process.stdin` e `process.stdout`), silenciando avisos falsos de erro.

### 2. Erro: `MODULE_NOT_FOUND` no Terminal
Este erro ocorre quando o Node.js não consegue localizar o arquivo especificado devido a erros no caminho ou na extensão do arquivo.
* **Solução**: Certifique-se de estar dentro da pasta  e sempre inclua a extensão `.js` ao executar o comando:
  ```powershell
  node calculadora_terminal.js
  ```

### 3. Entradas Assíncronas (`async/await`)
Diferente do navegador (onde o `prompt` trava a execução), no terminal as entradas são assíncronas.
* **Solução**: O código utiliza **Promises** junto com o módulo `readline` para criar uma experiência interativa, garantindo que o sistema espere a resposta do usuário antes de processar o cálculo.

---

## 💡 Notas de Desenvolvimento (Análise Técnica)

* **Ambiente (Linting)**: Para evitar erros de "Variable not defined" como o `process`, o código inclui a sinalização `/* eslint-env node */`, garantindo que o editor reconheça as globais do Node.js.
* **Validação**: O sistema utiliza a função `isNaN()` para garantir que o fluxo de cálculo só prossiga se as entradas forem números válidos, prevenindo erros de execução.



---
**Desenvolvido por:** Esmeraldo Junior 👨‍💻  
*Analista e Desenvolvedor de Sistemas*
