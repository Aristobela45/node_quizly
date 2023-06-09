const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema (
    {
        userId: {
            type: String,
            required: true,
        },
        quizId: {
            type: String,
            required: true
        },
        score: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model('submission', submissionSchema)