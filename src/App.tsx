import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/frame" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
