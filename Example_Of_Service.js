const axios = require('axios');

// API 요청을 전담하는 서비스 객체
const mediaService = {
    /**
     * 영상 촬영지 데이터 가져오기
     */
    getFilmingLocations: async (pageNo = 1) => {
        try {
            const response = await axios.get(process.env.API_URL, {
                params: {
                    serviceKey: process.env.SERVICE_KEY,
                    pageNo: pageNo,
                    numOfRows: 10,
                    _type: 'json'
                }
            });
            return response.data;
        } catch (error) {
            throw new Error('데이터 로드 실패: ' + error.message);
        }
    }
};

module.exports = mediaService;
