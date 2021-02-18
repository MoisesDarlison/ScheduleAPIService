const schedule = require('node-schedule');

module.exports = {
    create(req, res) {
        //Deixando variaveis nao utilizadas para utilizar posteriormente como conteudo do email 
        const { id, title, scheduled_to, description } = req.body 

        schedule.scheduleJob(id, scheduled_to, async () => {
            console.log(`------> Entrando dentro do agendamento de ID: ${id}. Executado --> ${Date()}`);
        });

        //utilizando para debug
        console.log(`ID ${id} --> Agend ${new Date(scheduled_to)} ==> ${new Date()}`);

        return res.status(200)
    },

    update(req, res) {
        const { scheduled_to } = req.body;
        const { id } = req.params
        schedule.rescheduleJob(id, scheduled_to);

        //utilizando para debug
        console.log(`ID ${id} reagendado para ${new Date(scheduled_to)}`);

        return res.status(204)
    },

    destroy(req, res) {
        const { id } = req.params
        
        schedule.cancelJob(id)
        
        //utilizando para debug
        console.log(`Cancelado agendamento de ${id}`);

        return res.status(204)
    },
}