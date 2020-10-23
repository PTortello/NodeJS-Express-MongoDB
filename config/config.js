const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://usuario_admin:nod3m0ng0@cluster0.f1kvp.mongodb.net/<dbname>?retryWrites=true&w=majority',
            jwt_pass: 'senhasecreta',
            jwt_expires_in: '1d'
        }
        
        case 'hml':
        return {
            bd_string: 'mongodb+srv://usuario_admin:nod3m0ng0@cluster0.f1kvp.mongodb.net/<dbname>?retryWrites=true&w=majority',
            jwt_pass: 'senhasecreta',
            jwt_expires_in: '7d'
        }
        
        case 'prod':
        return {
            bd_string: 'mongodb+srv://usuario_admin:nod3m0ng0@cluster0.f1kvp.mongodb.net/<dbname>?retryWrites=true&w=majority',
            jwt_pass: 'daskdhdDWDDASasdjsa33413%#$%as',
            jwt_expires_in: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
