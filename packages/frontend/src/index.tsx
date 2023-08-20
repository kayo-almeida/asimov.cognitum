import React from 'react';
import { createRoot } from 'react-dom/client';

import { Router } from '@presentation/router/Router';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</React.StrictMode>,
);

