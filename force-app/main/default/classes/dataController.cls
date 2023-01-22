public with sharing class dataController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        try {
            return [SELECT Id, Name FROM Contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}