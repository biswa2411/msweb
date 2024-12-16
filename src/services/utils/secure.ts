const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || 'fallback-key';
export const encodeData = (data: any): string => {
    try {
      const jsonString = JSON.stringify(data);
      let result = '';
      for (let i = 0; i < jsonString.length; i++) {
        const charCode = jsonString.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
        result += String.fromCharCode(charCode);
      }
      return btoa(result);
    } catch (error) {
      console.error('Encoding error:', error);
      return '';
    }
  };
  
  export const decodeData = (encodedData: string): any => {
    try {
      const decodedString = atob(encodedData);
      let result = '';
      for (let i = 0; i < decodedString.length; i++) {
        const charCode = decodedString.charCodeAt(i) ^ SECRET_KEY.charCodeAt(i % SECRET_KEY.length);
        result += String.fromCharCode(charCode);
      }
      return JSON.parse(result);
    } catch (error) {
      console.error('Decoding error:', error);
      return null;
    }
  };