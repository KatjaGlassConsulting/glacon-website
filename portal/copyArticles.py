import os
import shutil

def copyFiles(source, destination):
    files = os.listdir(source)
    for file_name in files:
        filename = os.path.join(source, file_name)
        if os.path.isfile(filename):
            shutil.copy(filename, destination)

def updatePathesForFinalNames(source):
    files = [fn for fn in os.listdir(source) if fn.endswith('.md')]
    for file_name in files:
        filename = os.path.join(source, file_name)
        print(filename)
        # read in
        f = open(filename,'r')
        filedata = f.read()
        f.close()
        # process
        newdata = filedata.replace("./img/","./articles/img/")
        # write out
        f = open(filename,'w')
        f.write(newdata)
        f.close()


# Copy the articles & pictures
copyFiles("C:\\temp\\git\\clinicalOpenSourcePortal\\article", "C:\\temp\\git\\homepage\\portal\\public\\articles")
copyFiles("C:\\temp\\git\\clinicalOpenSourcePortal\\article\\img", "C:\\temp\\git\\homepage\\portal\\public\\articles\\img")
# Update image references - NOT REQUIRED
#updatePathesForFinalNames("C:\\temp\\git\\homepage\\portal\\public\\articles")

