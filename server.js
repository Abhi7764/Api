const express = require('express');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const app = express();
const port = process.env.PORT || 3000;


app.post('/bfhl', (req, res) => {
    
    const { array } = req.body;

    
    const user_id = "john_doe_17091999";

    
    const evenNumbers = array.filter(num => num % 2 === 0);
    const oddNumbers = array.filter(num => num % 2 !== 0);
    const alphabets = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

    
    const response = {
        status: "Success",
        user_id,
        email_id: "john.doe@example.com",
        college_roll_number: "123456",
        even_numbers: evenNumbers,
        odd_numbers: oddNumbers,
        alphabets_uppercase: alphabets,
        is_success: true
    };

    res.json(response);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
