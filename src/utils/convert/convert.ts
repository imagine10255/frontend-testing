type TVariables = {
    [key: string]: TVariables|string|number|boolean|File|Blob
}
interface IConvertRes {variables: TVariables, map: string[], values: File[]}

const isFile = input => 'File' in window && input instanceof File;
const isBlob = input => 'Blob' in window && input instanceof Blob;



/**
 * 處理表單送出時, 將 data object 轉換成 graphql upload 格式
 *
 * 沒有限制方法
 * 但是必須完成 Base, AddChild, AddFile2 這三個測試綠燈通過
 * (不可異動 convert.spec.ts)
 *
 * ex:
 * $ yarn test -t=Base
 * $ yarn test -t=AddChild
 * $ yarn test -t=AddFile2
 *
 * @param originVariables
 * @param parentKey
 */
export const getVariablesFileMap = <V extends TVariables>(originVariables: V): IConvertRes => {
    // ...寫你的邏輯
    return {variables: {}, map: [], values: []};
}
