import './database'
import app from './app'


app.listen(app.get('port'),()=>{
    console.log('Servidor levantado en el puerto ', app.get('port'))
})
