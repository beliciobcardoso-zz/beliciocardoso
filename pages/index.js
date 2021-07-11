import userAuth from "../hooks/userAuth";

export default function Home() {

  const { user, signInGitHub } = userAuth();
  console.log('User', user);
  return (
    <div>
      <h1>
        Teste da pagina em uma nova branch.
      </h1>
      <button onClick={() => signInGitHub()}>Entrar com GitHub</button>
    </div>
  )
}
