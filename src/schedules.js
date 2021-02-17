const axios = require('axios');
const schedule = require('node-schedule');

module.exports = {
    create(req, res) {
        const { id, scheduled_to, description } = req.headers

        schedule.scheduleJob(id, scheduled_to, async () => {
            console.log(`Entrando dentro do agendamento de ID: ${id}. Executado --> ${Date()}`);
       });

        console.log(`ID ${id} --> Agend ${new Date(scheduled_to)} ==> ${new Date()}`);

        return res.status(200)
    },

    update(req, res) {
        const { scheduled_to } = req.headers
        const { id } = req.params

        schedule.rescheduleJob(id, scheduled_to);

        console.log(`ID ${id} reagendado para ${new Date(scheduled_to)}`);

        return res.status(204)
    },

    destroy(req, res) {
        const { id } = req.params
        schedule.cancelJob(id)

        console.log(`Cancelado agendamento de ${id}`);

        return res.status(204)
    },
}