/// <reference path="../../dts/angular-1.0.d.ts" />
/// <reference path="../../dts/angular-resource-1.0.d.ts" />
/// <reference path="ProductModel.ts" />
/// <reference path="../../OdataFilter.ts" />
/// <reference path="../OperationResultMessage.ts" />
/// <reference path="../Category/CategoryModel.ts" />


module Product {
    export interface IProductScope extends ng.IScope {
        Product: ProductModel;
        ProductsList: ProductModel[];
        CategoriesList: Category.CategoryModel[];
        OperationResultMessage: OperationResultMessage;

        Labels: any;

        SelectProductForUpdate(Product: ProductModel): void;
        // This has to have some logic - that is at least one category has to be checked.. easier to do in function
        IsFormValid(): bool;

        btnSave_Click(): void;
        btnClear_Click(): void;
        btnDelete_Click(): void;
    }
}