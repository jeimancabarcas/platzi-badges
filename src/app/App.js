import React from 'react';
import Layout from '../components/layout/Layout';
import RouterOutlet from '../router/RouterOutlet';

class App extends React.Component {
    render() {
        return(
            <Layout>
                <RouterOutlet />
            </Layout>
        );
    }
}

export default App;