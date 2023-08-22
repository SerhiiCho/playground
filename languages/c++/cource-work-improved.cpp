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
    Product phone = {
        .amount = 10,
        .companyProvider = "монітори",
        .countryProvider = "Ukraine",
        .price = 10.5,
        .hasProduct = 1,
        .arriveDate = {
            .Day = 4,
            .Month = "березень",
            .Year = 2015,
        },
    };

    cout << phone.filter();

    return 0;
}
