type TVariables = {
    [key: string]: TVariables|string|number|boolean|File|Blob
}
interface IConvertRes {
    variables: TVariables,
    map: string[],
    values: File[]
}

const isFile = input => 'File' in window && input instanceof File;
const isBlob = input => 'Blob' in window && input instanceof Blob;



/**
 * 處理表單送出時, 將 data object 轉換成 graphql upload 格式
 * ----
 * 沒有限制方法
 * 但是必須完成 Base, AddChild, AddFile2 這三個測試綠燈通過
 * (不可異動 convert.spec.ts)
 *
 * ex:
 * $ yarn test -t=Base
 * $ yarn test -t=AddChild
 * $ yarn test -t=AddFile2
 *
 * @param originVariables 解析來源參數
 * @return {
 *     variables: object 原本的傳入的 originVariables 結構, 但是遇到 File 需要改成 null (ex: {file1: File} 改成 {file1: null} ), 並放到 values, map
 *     map: Array<string> 從 variables 收集來的 File key 路徑
 *     values: Array<File> 從 variables 收集來的 File
 * }
 */
export const getVariablesFileMap = <V extends TVariables>(originVariables: V): IConvertRes => {
    // ...寫你的邏輯, 若有需要可以增加 Function, 或是 更改此 Function 的參數
    return {variables: {}, map: [], values: []};
}
