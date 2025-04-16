# Interface and abstract classes means and their differences -> https://youtu.be/kaZceE16m5A?si=7YAjgzFaDdOl68p0&t=37
    # What is absteract classes specifically -> https://youtu.be/UDmJGvM-OUw?si=tgjGNSCfKzxarSYF&t=47
# Why python does not provide interface and abstract classes -> https://youtu.be/kaZceE16m5A?si=LJAtfuuEK0TM6-3X&t=147 

# Python use the concept called duct typing, see what it is -> https://youtu.be/kaZceE16m5A?si=Ww1iKQkcIh61s6X_&t=201

# Understand abc module working ->  https://youtu.be/UDmJGvM-OUw?si=CDCaeSEUKdwA0OCF&t=207
from abc import ABC,abstractmethod

class A(ABC):

    # abstract property
    @property
    @abstractmethod
    def absProp(self):
        pass

    
    def __init__(self,name):
        self.name = name
    
    @abstractmethod
    def showName(self):
        print(self.name)
    
    # abstract class method
    @classmethod
    @abstractmethod
    def clsMet(cls):
        print(cls)

    # abstract static method
    @staticmethod
    @abstractmethod
    def staticMet():
        print('static method')
    

class implementA(A):

    # Now implement all

    # Must implement the abstract(absProp) property
    @property
    def absProp(self):
        return "the abstract property"

    # Must implement the abstract(showName) method
    def showName(self):
        print(self.name)
    
    # Must implement the abstract(clsMet) method
    @classmethod
    def clsMet(cls):
        print('The class',cls)

    # Must implement the abstract(staticMet) method
    @staticmethod
    def staticMet():
        print('static method')

        

bobj = implementA("abc")
print(bobj.absProp)

bobj.showName()
bobj.clsMet()

bobj.staticMet()