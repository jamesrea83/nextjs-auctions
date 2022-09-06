export async function getAllAuctions() {
	const dataURL =
		'https://nextjs-course-5ca25-default-rtdb.europe-west1.firebasedatabase.app/auctions.json';

	return await fetch(dataURL)
		.then(res => res.json())
		.then(data => {
			const transformedData = [];
			for (const key in data) {
				transformedData.push({
					id: key,
					...data[key],
				});
			}
			return transformedData;
		});
}
