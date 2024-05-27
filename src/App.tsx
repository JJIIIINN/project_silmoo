import { DetailPage, InvestigatePage, SignInPage, SignUpPage } from '@/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/investigate" element={<InvestigatePage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
