from graphs.models import citypopulation

class graphsdata:
    @classmethod
    def getgraphval(cls):
        try:
            getemailqry = citypopulation.objects.all()

            data = []

            for values in getemailqry:
                data.append({
                    'year': values.year,
                    'population': values.total_count
                })

            return data

        except Exception, err:
            failureobj = {
                'response': "Failure"
            }
            return failureobj
