file = open("country.csv")
a = file.readlines()

file.close()
file = open("test.txt", 'w')
b= [x.strip().split(",")[1]  for x in a]
b = sorted(b);

for x in b:
    file.write("<option value="+  x + ">" + x[1:-1]   + "</option>\n")

file.close()


