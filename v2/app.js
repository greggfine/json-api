var express = require('express'),
      app     = express(),
      helmet  = require('helmet');
    //   methodOverride = require('method-override');

var todoRoutes = require('./routes/todo');
app.use(helmet());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
// app.use(express.static('public'));
// app.use(methodOverride('method_'))
// app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Hello from root route')
})

app.use('/api/todos', todoRoutes);

app.listen(8000, () => console.log('Server is running'));