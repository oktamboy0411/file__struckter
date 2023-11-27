import {Route, Routes} from 'react-router-dom'

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={() => <h1>Home</h1>} />
  </Routes>
)
