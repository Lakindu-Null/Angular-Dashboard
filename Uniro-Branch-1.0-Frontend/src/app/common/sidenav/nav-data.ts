import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'setup-module',
        icon: 'fal fa-cog',
        label: 'Setup Module',
        items: [
            {
                routeLink: 'setup-module/volume-type',
                label: 'Volume Type'
            },
            {
                routeLink: 'setup-module/colors',
                label: 'Color'
            },
            {
                routeLink: 'setup-module/category',
                label: 'Category'
            },
            {
                routeLink: 'setup-module/product',
                label: 'Product'
            },
            {
                routeLink: 'setup-module/branch',
                label: 'Branch'
            },
            {
                routeLink: 'setup-module/users',
                label: 'Users'
            }
        ]
    },
    {
        routeLink: 'sales-module',
        icon: 'fal fa-tags',
        label: 'Sales Module',
        items: [
            {
                routeLink: 'sales-module/grn',
                label: 'Grn'
            },
            {
                routeLink: 'sales-module/stock-transfer',
                label: 'Stock Transfer'
            },
            {
                routeLink: 'sales-module/invoice',
                label: 'Invoice'
            },
            {
                routeLink: 'sales-module/invoice-reprint',
                label: 'Invoice Reprint'
            },
            {
                routeLink: 'sales-module/sales-return',
                label: 'Sales Return'
            },
            {
                routeLink: 'sales-module/sales-return-reprint',
                label: 'Sales Return Reprint'
            }
        ]
    },
    {
        routeLink: 'reports-module',
        icon: 'fal fa-chart-line',
        label: 'Reports Module',
        items: [
            {
                routeLink: 'reports-module/sales-commision',
                label: 'Sales Commision'
            },
            {
                routeLink: 'reports-module/current-stock',
                label: 'Current Stock'
            }
        ]
    },
];
