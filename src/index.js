import reactDom from 'react-dom'
import App from './components/App'

function Renderizar() {
  return <App />
}
reactDom.render(<Renderizar />, document.querySelector('.root'))
