public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> getAccountList(String nameStr){
        try {
            return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE :nameStr LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}