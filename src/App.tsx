import React from 'react';
import EmotionForm from './components/EmotionForm';

const App: React.FC = () => {
    return (
        <div style={{ padding: '50px', backgroundColor: '#fafafa', minHeight: '100vh' }}>
            <EmotionForm />
        </div>
    );
};

export default App;
