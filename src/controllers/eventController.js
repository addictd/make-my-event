import EventModelServices from '../services/eventModelServices';


class eventController {

    async add(req, res, next) {
        try {

            const { name, date, type, description, age, time } = req.body;

            if (!name || !date || !type || !description || !age || !time) {
                throw "Incomplete request params";
                return;
            }

            if (typeof name !== 'string' ||
                typeof date !== 'string' ||
                typeof type !== 'string' ||
                typeof description !== 'string' ||
                typeof age !== 'number' ||
                typeof time !== 'string') {
                throw "Invalid request params";
                return;
            }


            const response = await EventModelServices.add({ name, date, type, description, age, time });
            //   console.log('response', response);
            return res.json({ status: true, data: response, msg: "Event added successfully." });

        } catch (err) {
            console.log('err', err);
            return res.json({ status: false, data: {}, msg: err.toString() });
        }
    }

    async get(req, res, next) {
        try {

            const response = await EventModelServices.get();
            console.log('response', response);
            return res.json({ status: true, data: response, msg: "Event fetched successfully." });

        } catch (err) {
            console.log('err', err);
            return res.json({ status: false, data: {}, msg: err.toString() });
        }
    }


}
export default eventController;