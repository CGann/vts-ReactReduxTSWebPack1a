import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import VTSEditor from './components/VTSEditor';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/tryit' component={ VTSEditor } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
</Layout>;
