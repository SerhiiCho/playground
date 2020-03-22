#include <string.h>
#include <iostream>

using namespace std;

struct ArriveDate
{
    int Day;
    string Month;
    int Year;
};

struct Product
{
    ArriveDate arriveDate;
    int amount;
    string companyProvider;
    string countryProvider;
    double price;
    int hasProduct;

    string filter() {
        bool companyMatch = companyProvider == "монітори";
        bool priceMatch = price <= 1500;
        bool dateMatch = arriveDate.Month == "березень" && arriveDate.Year == 2015;

        return companyMatch && priceMatch && dateMatch ? companyProvider : "";
    };
};

int main()
{
    Product phone;
    phone.amount = 10;
    phone.companyProvider = "монітори";
    phone.countryProvider = "Ukraine";
    phone.price = 10.5;
    phone.hasProduct = 1;
    phone.arriveDate.Day = 4;
    phone.arriveDate.Month = "березень";
    phone.arriveDate.Year = 2015;

    cout << phone.filter();

    return 0;
}
