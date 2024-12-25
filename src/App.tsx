import MainPage from './pages/mainPage';
import Calculator from './components/calculator';

function App() {
  return (
    <>
      <div className="flex flex-col bg-primary min-h-screen py-10 gap-10 px-4">
        <h1 className="text-center text-2xl font-bold">Componente pc</h1>
        <Calculator />
        <MainPage />
      </div>
    </>
  )
}

export default App
