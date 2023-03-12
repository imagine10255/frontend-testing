import {getVariablesFileMap} from './convertFileMap';

const addPrefix = (name: string): string => {
    return `my_${name}`;
};


/** =================================
 *            請勿異動此檔案
 ================================== */
describe('Convert FileMap', () => {

    // it('Test Jest', async () => {
    //     const input = 'imagine';
    //
    //     const equalResult = 'my_imagine';
    //     expect(addPrefix(input)).toStrictEqual(equalResult);
    // });





    it('Base', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
            },
            file1,
        };

        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        const output = getVariablesFileMap(input);



        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                },
                file1: null,
            },
            map: ['variables.file1'],
            values: [file1]
        };

        expect(output).toStrictEqual(equalResult);
    });





    it('AddChild', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
                info: {
                    phone: '0900112113'
                },
                file1,
            },
        };

        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        const output = getVariablesFileMap(input);


        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                    info: {
                        phone: '0900112113'
                    },
                    file1: null,
                },
            },
            map: ['variables.input.file1'],
            values: [file1]
        };

        expect(output).toStrictEqual(equalResult);
    });

    it('AddFile2', async () => {

        /** -----------------------------------------
         |                  Input                   |
         /** ---------------------------------------*/
        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const file2 = new File(['thumb'], 'thumb.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
                info: {
                    phone: '0900112113',
                    file2,
                },
                file1,
            },
        };


        /** -----------------------------------------
         |                  Output                   |
         /** ---------------------------------------*/
        const output = getVariablesFileMap(input);



        /** -----------------------------------------
         |                  Equal                   |
         /** ---------------------------------------*/
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                    info: {
                        phone: '0900112113',
                        file2: null,
                    },
                    file1: null,
                },
            },
            map: ['variables.input.info.file2', 'variables.input.file1'],
            values: [file1, file2]
        };

        expect(output).toStrictEqual(equalResult);
    });



});
