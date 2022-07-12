import axios from 'axios';
import Cookies from 'js-cookie';

export const sendFilesToServer = async (value) => {
		try {
			const arrFile = [];
			const objFile = {};
			const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'api/upload', value, {
				headers: {
					'Content-Type': 'multipart/form-data',
					// Authorization: `Bearer ${Cookies.get('jwt')}`
				}
			});

			return res.data
			
			// res.data.forEach((file, index) => {
			// 	arrFile.push(file.id);
			// 	objFile[index] = {
			// 		id: file.id
			// 	};
			// });
			// return {
			// 	arrFile,
			// 	objFile
			// };
		} catch (e) {
			console.log(e.message);
		}
};
