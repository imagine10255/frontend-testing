import {emptyToNull} from './convertNull';


/** =================================
 *            請勿異動此檔案
 ================================== */
describe('Convert Null', () => {



    it('Input number', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const input = 1;


        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        // 必須可編譯推斷型別無錯誤
        const output: number|null = emptyToNull(input);


        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = 1;

        expect(output).toStrictEqual(equalResult);
    });

    it('Input string', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const input = '';


        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        // 必須可編譯推斷型別無錯誤
        const output: string|null = emptyToNull(input);


        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = null;

        expect(output).toStrictEqual(equalResult);
    });



    it('Input undefined', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const input = undefined;


        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        // 必須可編譯推斷型別無錯誤
        const output: undefined|null = emptyToNull(input);


        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = undefined;

        expect(output).toStrictEqual(equalResult);
    });





});
